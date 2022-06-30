
import re

regex = re.compile(r"(?P<head>\d)(?P<tail>\d+)")

filename = "input.txt"
with open(filename) as file:
    for line in file:
        print("line: ", line.rstrip())
        for match in re.finditer(regex, line):
            print("match:", match)
            print("groups:", match.groups() )
            print("head:", match.group('head') )
            print("tail:", match.group('tail') )
            

file.close()

