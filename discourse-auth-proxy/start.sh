#!/bin/bash
exec /bin/discourse-auth-proxy -listen-url="auth-proxy:80" -origin-url="http://frontend:3000" -proxy-url="https://bulletjournal.us" -sso-secret="5w7bsgwh2827sjs" -sso-url="https://1o24bbs.com" -allow-all