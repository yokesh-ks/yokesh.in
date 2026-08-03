#!/bin/bash

# Ensure we are in a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "Error: Not a git repository."
    exit 1
fi

# Get the total number of tracked files
file_count=$(git ls-files | wc -l | tr -d ' ')

# Calculate the cumulative file size of tracked files in bytes
if [ "$(uname)" = "Darwin" ]; then
    # macOS
    total_size=$(git ls-files -z | xargs -0 stat -f %z | awk '{s+=$1} END {print s}')
else
    # Linux
    total_size=$(git ls-files -z | xargs -0 stat -c %s | awk '{s+=$1} END {print s}')
fi

# Function to convert bytes to human readable format
human_readable_size() {
    local size=$1
    if [ -z "$size" ]; then
        echo "0 B"
        return
    fi
    local units=(B KB MB GB TB)
    local unit_index=0
    # awk is used to avoid bc dependency for floating point math
    awk -v size="$size" '
    BEGIN {
        split("B KB MB GB TB", units, " ")
        unit_index = 1
        while (size >= 1024 && unit_index < 5) {
            size /= 1024
            unit_index++
        }
        printf "%.2f %s\n", size, units[unit_index]
    }'
}

readable_size=$(human_readable_size "$total_size")

echo "Repository Statistics:"
echo "----------------------"
echo "Total files: $file_count"
echo "Total size:  $readable_size ($total_size bytes)"
