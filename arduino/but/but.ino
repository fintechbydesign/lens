// constants won't change. They're used here to set pin numbers:
const int  buttonPins [11] = {2,3,4,5,6,7,8,9,10,11,12}; // the number of the pushbutton pin

char dataString[50] = {0};


void setup() {
  Serial.begin(9600);
  // initialize the pushbutton pin as an input:
  for (byte i=0; i<11; i++) {
    pinMode(buttonPins[i], INPUT);
  }
}

int last_button_pressed = 100;
unsigned long last_checked = 0;
void loop() {
  for (byte i=0; i<11; i++) {
    if (digitalRead(buttonPins[i])) { //if true button is pressed
      buttonPressed(i);
      last_button_pressed = i;
      last_checked = millis();
      break;
    } 
  }
  if(millis() - last_checked  > 500){
    last_button_pressed = 100;
    last_checked = millis();
  }
}

void buttonPressed(int buttonID) {
  if(last_button_pressed != buttonID){
        switch (buttonID) {
    case 0:
      Serial.print("7");
      sprintf(dataString,"%02X","7");
      break;
    case 1:
      Serial.print("8");
      sprintf(dataString,"%02X","8");
      break;
    case 2:
      Serial.print("9");
      sprintf(dataString,"%02X","9");
      break;
    case 3:
      Serial.print("r");
      sprintf(dataString,"%02X","R");
      break;
    case 4:
      Serial.print("s");
      sprintf(dataString,"%02X","E");
      break;
    case 5:
      Serial.print("1");
      sprintf(dataString,"%02X","1");
      break;
    case 6:
      Serial.print("2");
      sprintf(dataString,"%02X","2");
      break;
    case 7:
      Serial.print("3");
      sprintf(dataString,"%02X","3");
      break;
    case 8:
      Serial.print("4");
      sprintf(dataString,"%02X","4");
      break;
    case 9:
      Serial.print("5");
      sprintf(dataString,"%02X","5");
      break;
    case 10:
      Serial.print("6");
      sprintf(dataString,"%02X","6");
      break;
  }
    }
}



