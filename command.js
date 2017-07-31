var fs = require('fs');
var ls = '';
module.exports = {
	pwd:  () => {
		process.stdout.write(process.cwd() + '\n');

	},
	date: () => {
		process.stdout.write(Date() + '\n');
	},
	fs: () => {
		fs.readdir('.', function(err, files) {
  			if (err) throw err;
  			files.forEach(function(file) {
    			ls  += file.toString() + " ";
  			})
  			process.stdout.write(ls + '\n');
		});
	},
	echo: (string) => {
		process.stdout.write(string.substring(5) + '\n');
	},
	cat: (str)  => {
		var result = fs.readFileSync(str, (err,rs) => {
			if (err) return 'error\n';
			else return rs;
		});
		console.log(result);
}

};
