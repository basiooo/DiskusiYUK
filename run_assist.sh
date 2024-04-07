#!/bin/bash

usage() {
    echo "Usage: $0 [--run-dev] {--run-build]" 1>&2
    exit 1
}

if [ $# -eq 0 ]; then
    usage
fi

while [[ $# -gt 0 ]]; do
    key="$1"
    args="$2"
    case $key in
        --run-dev)
            COMMAND='npm run dev' docker compose up mrwde $args
            shift
        ;;
        --run-build)
            COMMAND='npm run build' docker compose up mrwde $args
            shift
        ;;
        *)
            usage
        ;;
    esac
done