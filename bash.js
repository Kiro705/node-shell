var fs = require('fs');
var command = require('./command.js')
process.stdout.write('prompt >');

process.stdin.on('data', (data)  => {
	var cmd = data.toString().trim();
	var array = [];
	if(cmd === 'pwd'){
		command.pwd();
	}
	if(cmd === 'date'){
		command.date();
	}
	if(cmd === 'fs'){
		command.fs();
	}
	if(cmd.includes('echo')){
		command.echo(data.toString().trim());
	}
	process.stdout.write('You typed: ' + cmd);
	process.stdout.write('\nprompt > ');
})
