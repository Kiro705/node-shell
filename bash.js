
process.stdout.write('prompt >');

process.stdin.on('data', (data)  => {
	var cmd = data.toString().trim();
	var array = [];
	if(cmd === 'pwd'){
		process.stdout.write(process.cwd() + '\n');
	}
	if(cmd === 'date'){
		process.stdout.write(Date() + '\n');
	}
	process.stdout.write('You typed: ' + cmd);
	process.stdout.write('\nprompt > ');
});
