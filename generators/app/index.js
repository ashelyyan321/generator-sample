//generator的核心入口

const Generator =  require('yeoman-generator')

module.exports = class extends Generator{
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }
        ])
        .then(answers => {
            this.answers = answers
        })
    }



    writing() {
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )

        const tmpl = this.templatePath('bar.html')
        const output = this.destinationPath('bar.html')
        const context = this.answers

        this.fs.copyTpl(tmpl,output,context)
    }
}