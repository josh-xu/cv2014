function swap_col(m, c)
{
    var c2 = (c%3==2 ? c-2 : c+1);
    for (var r=0; r<9; r++){
        var t = m[r*9+c];
        m[r*9+c] = m[r*9+c2];
        m[r*9+c2] = t;
    }
}
function swap_row(m, r)
{
    var r2 = (r%3==2 ? r-2 : r+1);
    for (var c=0; c<9; c++){
        var t = m[r*9+c];
        m[r*9+c] = m[r2*9+c];
        m[r2*9+c] = t;
    }
}
// swap all d <--> d+1
function swap_num(m, d)
{
    for (var i=0; i<81; i++){
        if (m[i]==d) m[i] = d+1;
        else if (m[i]==d+1) m[i] = d;
    }
}

var S;
var S2;
function random_sudoku()
{
    S = [
        5,3,4,6,7,8,9,1,2,
        6,7,2,1,9,5,3,4,8,
        1,9,8,3,4,2,5,6,7,
        8,5,9,7,6,1,4,2,3,
        4,2,6,8,5,3,7,9,1,
        7,1,3,9,2,4,8,5,6,
        9,6,1,5,3,7,2,8,4,
        2,8,7,4,1,9,6,3,5,
        3,4,5,2,8,6,1,7,9,
        ];

    for (var c=0; c<21; c++){
        var i = Math.floor(Math.random()*8);
        switch (Math.floor(Math.random()*3)){
            case 0: swap_col(S, i); break;
            case 1: swap_row(S, i); break;
            case 2: swap_num(S, i+1); break;
        }
    }

    S2 = [
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        ]

    var cnt = 0;
    while (cnt<21){
        var i = Math.floor(Math.random()*81);
        if (S2[i]==0){
            S2[i] = S[i];
            cnt++;
        }
    }
}

function disp_sudoku(show_sln)
{
    var table = document.getElementById("sudoku");
    while (table.firstChild)
        table.removeChild(table.firstChild);
    for (var i=0; i<9; i++){
        var tr = document.createElement("tr");
        for (var j=0; j<9; j++){
            var td = document.createElement("td");
            if (show_sln || S2[i*9+j])
                td.textContent = ""+S[i*9+j];
            if (j==8) td.classList.add("rightmost");
            else if (j%3==2) td.classList.add("rightbold");
            if (i==8) td.classList.add("bottommost");
            else if (i%3==2) td.classList.add("bottombold");

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
