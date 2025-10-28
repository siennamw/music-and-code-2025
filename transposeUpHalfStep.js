const pitchNames = [
    'C-natural',
    'C-sharp',
    'D-natural',
    'D-sharp',
    'E-natural',
    'F-natural',
    'F-sharp',
    'G-natural',
    'G-sharp',
    'A-natural',
    'A-sharp',
    'B-natural'
];

const enharmonicEquivalents = {
    'C-flat': 'B-natural',
    'B-flat': 'A-sharp',
    'A-flat': 'G-sharp',
    'G-flat': 'F-sharp',
    'F-flat': 'E-natural',
    'E-flat': 'D-sharp',
    'D-flat': 'C-sharp',
}

// letterName must be a string that is a capital letter between A and G (inclusive)
// alteration must be 'flat', 'sharp', or 'natural'

const transposeUpHalfStep = (letterName, alteration = 'natural') => {
    const validNoteNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const isValidNoteName = validNoteNames.includes(letterName);

    if (!isValidNoteName) {
        throw new Error('invalid note name');
    }

    const pitch = alteration === 'flat'
        ? enharmonicEquivalents[`${letterName}-${alteration}`]
        : `${letterName}-${alteration}`;
    
    let index = pitchNames.indexOf(pitch);

    if (index === pitchNames.length - 1) {
        index = -1; // wrap to beginning of array
    }

    const result = pitchNames[index + 1];
    console.log(result);
}


const pitchesToTranspose = [['B', 'flat'], ['A'], ['G', 'sharp']];

for (const i of pitchesToTranspose) {
    transposeUpHalfStep(...i);
}