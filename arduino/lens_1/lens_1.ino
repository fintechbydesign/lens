/*
  Button
  Turns on and off a light emitting diode(LED) connected to digital pin 13,
  when pressing a pushbutton attached to pin 2.
  The circuit:
  - LED attached from pin 13 to ground
  - pushbutton attached to pin 2 from +5V
  - 10K resistor attached to pin 2 from ground
  - Note: on most Arduinos there is already an LED on the board
    attached to pin 13.
  created 2005
  by DojoDave <http://www.0j0.org>
  modified 30 Aug 2011
  by Tom Igoe
  This example code is in the public domain.
  http://www.arduino.cc/en/Tutorial/Button
*/
// constants won't change. They're used here to set pin numbers:
const int buttonPin = 2;     
const int buttonPin2 = 3;
const int buttonPin3 = 4;   
const int ledPin = 13;     
const int ledPin2 = 12;     
const int ledPin3 = 11;
// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status
int button2State = 0;         // variable for reading the pushbutton status
int button3State = 0;         // variable for reading the pushbutton status

int lastButtonState = 0;
int lastButton2State = 0;
int lastButton3State = 0;

int onoffstate = 0;
int onoff2state = 0;
int onoff3state = 0;

void setup() {
  Serial.begin(9600);
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
  pinMode(ledPin2, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin2, INPUT);
  
  pinMode(ledPin3, OUTPUT);
  pinMode(buttonPin3, INPUT);
}
void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);
//  Serial.println(buttonState);
  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState != lastButtonState) {
    if (buttonState == HIGH) {
      // turn LED on:
      digitalWrite(ledPin, HIGH);
      //Serial.println("Led 1 on");
      Serial.write("1");
    } else {
      // turn LED off:
      digitalWrite(ledPin, LOW);
    }
    delay(75);
  }
  lastButtonState = buttonState;
  
  /*==========================================*/
  button2State = digitalRead(buttonPin2);
  //Serial.println(button2State);

  if (button2State != lastButton2State) {
    if (button2State == HIGH) {
      // turn LED on:
      digitalWrite(ledPin2, HIGH);
      //Serial.println("Led 2 on");
      //Serial.write("2 on");
      if(onoff2state==0){

        Serial.write("A");
        digitalWrite(ledPin2, HIGH);
        onoff2state=1;
        }
      else
      {
        Serial.write("B");
        digitalWrite(ledPin2, LOW);
        onoff2state=0;
        }
    }
    delay(75);
  }
  lastButton2State = button2State;
  
  /*==========================================*/
  button3State = digitalRead(buttonPin3);
  //Serial.println(button3State);
  if (button3State != lastButton3State) {
    if (button3State == HIGH) {
      // turn LED on:
      digitalWrite(ledPin3, HIGH);
      //Serial.println("Led 3 on");
      
      if(onoff3state==0){

        Serial.write("C");
        digitalWrite(ledPin3, HIGH);
        onoff3state=1;
        }
      else
      {
        Serial.write("D");
        digitalWrite(ledPin3, LOW);
        onoff3state=0;
        }
    } 
    /*else {
      // turn LED off:
      digitalWrite(ledPin3, LOW);
    } */
    delay(75);
  }
  lastButton3State = button3State;
  

  
}
