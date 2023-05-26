
/* console.log("hello world"); */

class notepad {
  constructor() {
      this.cursor = 0;
      this.text = [];
    }
    
    addText(text) {
      if (typeof text === 'string') {
        for (let i = 0; i < text.length; i++) {
          this.text.splice(this.cursor, 0, text[i]);
          this.cursor++;
        }
      } else {
        this.text.splice(this.cursor, 0, text);
        this.cursor++;
      }
    }
  
    delete() {
      if (this.text.length === 0) {
        return 'Delete error';
      } else {
        this.text.splice(this.cursor - 1, 1);
        this.cursor--;
        return 'Deleted';
      }
    }
  
    moveLeft() {
      if (this.cursor > 0) {
        this.cursor--;
      }
    }
  
    moveRight() {
      if (this.cursor < this.text.length) {
        this.cursor++;
      }
    }
  
    enter() {
      return this.text.join('');
    }
  }

  function convertAsciiToText(asciiCode) {
    return String.fromCharCode(asciiCode);
  }

  
  const TestCase1 = new notepad();
  TestCase1.addText(convertAsciiToText(72));  
  TestCase1.addText(convertAsciiToText(101));
  TestCase1.addText(convertAsciiToText(108));
  TestCase1.addText(convertAsciiToText(112));      
  TestCase1.addText(convertAsciiToText(115));
  TestCase1.moveLeft()
  TestCase1.delete()
  TestCase1.addText(convertAsciiToText(108));
  TestCase1.addText(convertAsciiToText(111));
  TestCase1.moveRight()
  TestCase1.delete()
  console.log(TestCase1.enter());
  //return(notepad)

  const TestCase2 = new notepad();
  TestCase2.delete()
  console.log(TestCase2.delete());

  const TestCase3 = new notepad();
  TestCase3.addText(convertAsciiToText(83));
  TestCase3.addText(convertAsciiToText(32));      
  TestCase3.delete()
  console.log(TestCase3.delete());

  const TestCase4 = new notepad();
  TestCase4.addText(convertAsciiToText(83));  
  TestCase4.addText(convertAsciiToText(107));
  TestCase4.addText(convertAsciiToText(100));
  TestCase4.moveLeft()
  TestCase4.addText(convertAsciiToText(105)); 
  console.log(TestCase4.enter());
  
  const TestCase5 = new notepad();
  TestCase5.addText(convertAsciiToText(83));  
  TestCase5.addText(convertAsciiToText(107));
  TestCase5.addText(convertAsciiToText(101));
  TestCase5.moveLeft()
  TestCase5.addText(convertAsciiToText(105));
  TestCase5.moveRight()
  TestCase5.addText(convertAsciiToText(115)); 
  console.log(TestCase5.enter());  
