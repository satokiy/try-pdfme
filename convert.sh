#!bin/sh

arg=$1
rsvg-convert -f pdf -o /svg/asset/pdf/gen/${arg}.pdf /svg/asset/svg/${arg}.svg
