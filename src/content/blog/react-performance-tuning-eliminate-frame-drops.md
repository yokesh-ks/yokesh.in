---
title: "React Performance Tuning: Eliminate Frame Drops"
description: "Fix React performance issues causing frame drops. Learn to use React Scan, memoization, and reference stabilization for smoother UIs."
pubDate: "Oct 7 2025"
coverImage: "/blog-2.png"
category: "development"
ogImage: "https://www.yokesh.in/blog-2.png"
keywords: "React performance, frame drops, React Scan, memoization, reference stability, useEffect optimization, performance tuning, UI optimization, React hooks, render optimization"
---

As our app grew, the UI started to feel off. Scrolls stuttered, hovers flickered, tooltips arrived late. We knew performance was the problem—but not where to start without breaking things. So we followed one rule: measure first, then fix. With React Scan in our flow, we spotted the real culprits: components re-rendering too often and props changing identity for no reason. A few tiny logs confirmed a hidden loop.

From there, small changes made a big impact. We kept objects and arrays stable, guarded effects, and skipped no-op updates. The result: snappy hovers, instant tooltips, smoother typing, fewer regressions—and a team that ships with confidence. This guide shares the exact playbook we used to turn “it feels slow” into flow: run React Scan, add light instrumentation, stabilize references, and re-measure so your app stays fast as it grows.



## Setting the Stage: The Subtle Lag

The UI under scrutiny renders a calendar-style grid of interactive cells. Each cell can open a pricing tooltip, while a summary table tallies totals and a set of selectors drives the data. Functionally everything worked, yet users felt the cursor stutter whenever they hovered across the grid. Profiling confirmed the suspicion: large frame drops and erratic paint times.

The tricky part? The code already followed plenty of “best practices”: hooks were modular, memoization existed here and there, prop drilling was limited. We needed more insight than “it might be re-rendering too much.” That’s where React Scan earned its keep.



## Using React Scan to Define the Problem

React Scan sits somewhere between flame graphs and component-level diagnostics. Its initial report surfaced two headline numbers:

- React spent roughly 300 ms rendering during the bad frame.
- An additional ~390 ms went to “everything else”: effects, layout, paint, and so on.

But the real gems were the per-component stats. Two bright-red flags stood out:

1. A cell tooltip rendered more than two thousand times during a single hover interaction, even though the data barely changed.

2. The composite calendar view re-rendered a dozen times in quick succession, and every pass rippled into child elements, summary tables, and selectors.

React Scan also showed which props changed. For the tooltip, the only prop mutating was a “guest details” object—clear evidence that memoization wasn’t sticking because React kept seeing a new object. For the calendar view, the repeating culprit was a roomBlocks array that was supposed to be stable but apparently wasn’t. React Scan didn’t give us the fix, but it pointed a spotlight straight at the suspects.



## Step 1: Instrumentation, the Right Way

Before touching logic, I dropped a focused console trace into every useEffect hook inside the calendar subtree. The goal wasn’t to spam the console but to observe which hooks fired together and in what order.

The logs revealed a repeating sequence:

[Calendar] useEffect initialBlocks {count: 1} [Calendar] useEffect emitBlocks {count: 1} [Parent] useEffect trackDirty {roomBlockCount: 1} [Summary] useEffect syncConfig { … } [Summary] useEffect updateTotals { … }

Then the same sequence repeated… and repeated again. That meant state updates inside the calendar were bouncing through the parent component and coming back unchanged—classic reference churn. Once the loop surfaced, every downstream re-render made sense.

## Step 2: Stabilizing Inputs

#### Memoizing Shared Data

React Scan’s change log for the tooltip mentioned those “guest details” hundreds of times. Each pass carried a freshly constructed object, so React dutifully re-rendered every tooltip cell. The fix was to memoize a normalized version inside the calendar component, keyed on scalar fields (e.g., adults, children, infants). Once that memoized object replaced the raw prop, the render count collapsed to something tied to actual pointer movement.

#### Guarding Against Shallow Equality Pitfalls

The calendar accepted an initialBlocks array from its parent. Even when the contents were identical, useEffect saw a new reference each time and reset local state, triggering the loop we saw in the console. Two guardrails broke that cycle:

1. Stable Equality
A helper compares arrays by length, IDs, and a deterministic JSON representation. By storing the last processed array in a ref, the effect now runs only when something genuinely changes.

2. Early Exit in the Update Handler
Internal updates previously regenerated the entire array. The new handler checks whether the updated block actually differs from the existing one. If not, it returns the previous array so React understands “nothing changed.”

These tiny guardrails had big impact: once the calendar stopped emitting new references for identical data, the parent stopped toggling its dirty flag, and downstream components stopped recalculating totals for no reason.

## Step 3: Verifying the Results

I repeated the same interaction with React Scan:

- Tooltip render count dropped from thousands to the handful required by real pointer movement.
- The calendar view stabilized—only actual edits triggered rerenders.
- The console logs went quiet; the “initial → emit → parent dirty” drumbeat vanished.

Most importantly, the UI felt different. Tooltips opened instantly, hover states followed the cursor, and typing into selectors stopped freezing for a third of a second. The metrics matched what users experienced.



## Lessons Learned Along the Way

1. React Scan is a Powerful First Step
Instead of guessing, go straight to the components causing the most pain—React Scan even shows which props keep changing.

2. Instrumentation Beats Guesswork
Targeted logging inside hooks illuminated the chain reaction that kept looping. Without that signal, we might have optimized the wrong area.

3. Stable References Are Everything
React’s reconciliation hinges on identity. Regenerating arrays or objects—even with identical data—can trigger expensive rerenders. Sometimes it’s worth comparing complex structures explicitly or centralizing the data so only one place owns the reference.

4. Memoization Must Be Intentional
Memoizing a component without stabilizing its props is like locking the door but leaving the windows open. The tooltip example showcased that the cheapest fix is often ensuring the data you pass down stays referentially stable.

5. Treat Symptoms, Then Cure the Cause
The tooltip’s render storm was a symptom; the root cause was upstream state churn. Fixing the calendar removed the root and eliminated multiple downstream “fix me” hacks.

## Final Thoughts

The whole process—React Scan, targeted logging, stabilizing inputs, guarding against redundant updates—took less time than a rewrite and delivered a better outcome. More importantly, it established a repeatable playbook:

1. Profile with React Scan to identify the worst offenders.
2. Instrument suspicious components to reveal hidden loops or effects.
3. Stabilize inputs (memoize, compare, bail early on identical data).
4. Re-run the profile to confirm the improvements.

Whenever you encounter mysterious frame drops in a React app, this combination of diagnosis and restraint can guide you to a fix that’s both precise and maintainable. There’s no need to blanket the code with memoization or rip out components wholesale. Oftentimes, the best optimization is simply teaching React when nothing has actually changed.