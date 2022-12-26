const fs=require('fs')

var list = ['katyusha', 'e-e-edfe', 'grasswalk', 'where am i going', 'sad', 'tom', 'a#d#cc#c', 'ffgaf', 'bcabc', 'bga#c#', 'cdbc', 'dddc', 'cdd#', 'gddf#dd', 'ag#ag#f#', 'f#g#c#g#a#c#', 'ef#c#ag#', 'friend', 'd#ba#g#g', 'a#agaa#c', 'ggaa#ag', 'a#agaa#c2', 'c#d#fc#c', 'da#gf#g', 'cdd#d#', 'ef#d#c#2', 'bbbdcb', 'efcaa', 'cag#g', 'dc#da', 'ebcdcb', 'aeaba']

for (let i = list.length - 1; i >= 0; i--) {
    console.log(fs.statSync(list[i]+'.mp3').ctime)
}