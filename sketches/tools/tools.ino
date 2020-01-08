// IN OUT ULTIMATE

// Digital pins
const byte piezoPin = 12;
const byte tumblerPin = 13;

bool tumbler;
bool isGreeted = false;

String WD = ":";
String SAMPLE = "sample";

void setup(){
    Serial.begin(115200);
    pinMode(tumblerPin, INPUT_PULLUP);
    pinMode(piezoPin, OUTPUT);
}

void loop(){
    if(digitalRead(tumblerPin)){
        On();
    } else {
        StandBy();
    }
}

void sendSample(byte pinN, int value){
    Serial.println(SAMPLE + WD + pinN + WD + value + WD + millis() ); // dataType:@pin:value:timestamp
}

void Melody(){
    if(!isGreeted){
        isGreeted = true;
        for(byte i=0; i < 10; i++){
            tone(piezoPin, (i+1) * 100, 10);
            delay(10);
        }

        for(byte i=10; i > 0; i--){
            tone(piezoPin, (i+1) * 100, 10);
            delay(10);
        }
    }
    noTone(piezoPin);
}

void On(){
    for(byte i=2; i<14; i++){
        sendSample(i, digitalRead(i));
    }

    for(byte i=A0; i<A6; i++){
        sendSample(i, analogRead(i));
    }

    Melody();

}

void StandBy(){}