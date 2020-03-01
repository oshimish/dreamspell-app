#!/bin/sh -eu
cat <<EOF
window.REACT_APP_AIKEY='${REACT_APP_AIKEY-}';
EOF