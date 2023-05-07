# 将命令和描述分离
commands = []
descriptions = []
for line in selected_code.split("\n"):
    line = line.strip()
    if line.startswith("$"):
        commands.append(line)
    elif line:
        descriptions.append(line)

# 将命令和描述合并成表格
table = "| 类别 | 命令 | 作用 |\n| --- | --- | --- |\n"
for command, description in zip(commands, descriptions):
    table += f"| {selected_code.split('\\n')[0].strip()} | {command} | {description} |\n"

# 输出表格
print(table)
