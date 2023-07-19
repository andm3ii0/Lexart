export function cyclotron(particle, matrix) {
    const newMatrix = []
    const rows = matrix.length;
    const cols = matrix[0].length;
    console.log(matrix);

    if (particle === 'e') {
        for (let i = 0; i < rows; i++) {
            newMatrix.push([])
            for (let j = 0; j < cols; j++) {
                if (i === 0) {
                    newMatrix[i].push(particle);
                } else if (j === cols - 1) {
                    newMatrix[i].push(particle);
                } else {
                    newMatrix[i].push('1');
                }
            }
        }
    } else if (particle === 'p') {
        for (let i = 0; i < rows; i++) {
            newMatrix.push([])
            for (let j = 0; j < cols; j++) {
                if (i === 0) {
                    newMatrix[i].push(particle);
                } else if (j === 0) {
                    newMatrix[i].push(particle);
                } else if (j === cols - 1 && i !== rows - 1) {
                    newMatrix[i].push(particle);
                } else if (i === rows - 1 && j !== cols - 1) {
                    newMatrix[i].push(particle);
                } else if (j === cols - 2 && i === rows - 2) {
                    newMatrix[i].push(particle);
                } else {
                    newMatrix[i].push('1');
                }
            }
        }
    } else if (particle === 'n') {
        for (let i = 0; i < rows; i++) {
            newMatrix.push([])
            for (let j = 0; j < cols; j++) {
                if (i === 0) {
                    newMatrix[i].push(particle);
                } else {
                    newMatrix[i].push('1');
                }
            }
        }
    }

    return newMatrix;
}