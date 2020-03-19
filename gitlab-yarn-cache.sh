#!/usr/bin/env bash
# set -eux

if [ -f "package.json" ]; then
  node -e 'require("./package.json")'
  ret=$?
  if [ $ret != 0 ]; then
    echo -e "\033[31m`package.json` syntax error.\033[0m" >&2
    exit $ret
  fi
else
  echo -e "\033[31m`package.json` missing.\033[0m" >&2
  exit 1
fi

NPM_LOCK_FILE="yarn.lock"
NPM_VERSIONS_DIGEST=`md5sum ${NPM_LOCK_FILE} | cut -d ' ' -f1`
NPM_CACHE_DIR="/tmp/ng-nine-test/${NPM_VERSIONS_DIGEST}"
rm -rf "node_modules"

if [ -d "$NPM_CACHE_DIR/node_modules" ]; then
  echo -e "\033[33mUsing npm cache by $NPM_LOCK_FILE at $NPM_CACHE_DIR\033[0m"
  ln -s "$NPM_CACHE_DIR/node_modules" "node_modules"

else
  rm -rf "$NPM_CACHE_DIR"
  mkdir -p "$NPM_CACHE_DIR/node_modules"
  ln -s "$NPM_CACHE_DIR/node_modules" "node_modules"
  yarn
fi

exit 0
