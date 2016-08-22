#!/bin/bash
aws s3 sync . s3://media.benjamintatum.com --profile "home" --exclude "deploy.sh" --exclude ".DS_Store" --cache-control "max-age=604800" --expires 2100-01-01T00:00:00Z
