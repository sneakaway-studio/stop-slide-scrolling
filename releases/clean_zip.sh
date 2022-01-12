#!/bin/bash

name=$1
echo $name

zip -d $name __MACOSX/\*
zip -d $name \*/.DS_Store
zip -d $name \*/.git
zip -d $name \*/.svn
zip -d $name \*/.idea
