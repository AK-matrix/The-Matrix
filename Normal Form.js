function array_length(arr){
    return arr.length;
}
function swap(matrix, k) {
    function haha(matrix, k, col){
        if(col === array_length(matrix[0]) - 1){
            return matrix;
        }
    if(matrix[k][col] === 0){
        for(let x = k + 1; x < array_length(matrix); x = x + 1){
            if(matrix[x][col] !== 0){
                
                for(let z = 0; z < array_length(matrix[k]); z = z + 1){
                    let u = matrix[k][z];
                    matrix[k][z] = matrix[x][z];
                    matrix[x][z] = u;
                }
                return matrix;
            }
        }
        return haha(matrix, k, col + 1);
    }
        return matrix;
  }
  return haha(matrix, k, 0);
}

function eliminate(matrix, k){
    let c = 0;
    for(let x = 0; x < array_length(matrix[0]); x = x + 1){
        if(matrix[k][x] !== 0){
            c = x;
            break;
        }
    }
    for(let y = k + 1; y < array_length(matrix); y = y + 1){
        if(matrix[y][c] !== 0){
            let con = matrix[y][c] / matrix[k][c];
            for(let u = 0; u < array_length(matrix[0]); u = u + 1 ){
                matrix[y][u] = matrix[y][u] - con * matrix[k][u];
            }
        
        }
    }
    return matrix;
}

function gaussian_elimination(matrix){
    for(let z = 0; z < array_length(matrix); z = z + 1){
        matrix = eliminate(swap(matrix, z), z);
    }
    return matrix;
}
function eliminate_back(matrix, k){
    let c = -1;
    for(let x = array_length(matrix[0])-1; x >=0; x = x - 1){
        if(matrix[k][x] !== 0){
            c = x;
            break;
        }
    }
    if(c === -1){
        return matrix;
    }
    
    
    for(let y = k - 1; y >=0; y = y - 1){
        if(matrix[y][c] !== 0){
            let con = matrix[y][c] / matrix[k][c];
            for(let u = 0; u < array_length(matrix[0]); u = u + 1 ){
                matrix[y][u] = matrix[y][u] - con * matrix[k][u];
            }
        
        }
    }
    return matrix;
}
function gauss_jordan_elimination(matrix){
    matrix = gaussian_elimination(matrix);
    for(let y = array_length(matrix) - 1; y >= 0; y = y - 1){
        
        matrix = eliminate_back(matrix, y);
    }
    for(let k = 0; k < array_length(matrix); k = k + 1){
    let c = -1;
    for(let x = 0; x < array_length(matrix[0]); x = x + 1){
        if(matrix[k][x] !== 0 && c === -1){
            c = matrix[k][x];
            matrix[k][x] = 1;
        }
        else if(matrix[k][x] !== 0){
            matrix[k][x] = matrix[k][x] / c;
        }
    }
    }
    return matrix;
}



let test_matrix8 = [[1, 2, 1, 9],
                    [7, 1, 3, 4],
                    [4, 9, 2, 2],
                    [1, 9, 3, 1]];

console.log(JSON.stringify(gauss_jordan_elimination(test_matrix8)));