let keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: 0,
    setCharCount: function() {
        while (true) {
            let int = +prompt("Enter the number of characters for the training");
            if (this.checkPositiveInteger(int) === true) {
                charCount = int;
                break;
            }
            else {
                alert("Try again! Enter integer number.")
            }
        }
    },
    checkPositiveInteger: function(charCount) {
        if ((charCount % 1 == 0) && (charCount > 0)) {
            return true;
        }
        else {
            return false;
        }
    },
    task: [],
    createTask: function() {
        for (let i = 0; i < charCount; i++) {
            let randomInt = Math.floor(Math.random() * (this.chars.length - 1));
            let randomChar = this.chars[randomInt];
            this.task.push(randomChar);
        }
    },
    userInput: '',
    userErrors: 0,
    startTask: function() {
        let userString = prompt("Try write this string: " + this.task.join(""));
        this.userInput = userString;
        let trainingStr = this.task.join("");
        for(let i = 0; i < trainingStr.length; i++) {
            if (this.userInput[i] != trainingStr[i]) {
                this.userErrors += 1;
            }
        }
        if(this.userErrors == 0){
            console.log("Congratulations, it's correctly!");
        } else {
            console.log("You have " + this.userErrors + " mistakes. Try again! You can do it!");
        }
    }
};
function run() {
        keyTrainer.setCharCount();
        keyTrainer.createTask();
        keyTrainer.startTask();
    }
run();


