
var command = require('command.js')
process.stdout.write('prompt >');

process.stdin.on('data', (data)  => {
	var cmd = data.toString().trim();
	var array = [];
	if(cmd === 'pwd'){
		command.pwd();
	}
	if(cmd === 'date'){
		process.stdout.write(Date() + '\n');
	}
	process.stdout.write('You typed: ' + cmd);
	process.stdout.write('\nprompt > ');
})
