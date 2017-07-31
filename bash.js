
process.stdout.write('prompt >');

process.stdin.on('data', (data)  => {
	var cmd = data.toString().trim();
	process.stdout.write('You typed: ' + cmd);
for (i in process.argv) {
	process.argv[i];

}
	process.stdout.write('\nprompt > ');
});
