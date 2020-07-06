// JavaScript source code
var ANY_REFERENCIA = 1948; //any de traspas de referència


hello_world();
fase1();
fase2();
fase3();


function titol(titol)
{
    console.log("\n\n---\n"+titol+":\n");
}

function hello_world()
{
    titol("hello world");
    console.log("Hello World!");
    console.log(Date.now());
}

function fase1()
{
    titol("fase1");
    var nom="Pau", cognom1="Lopez", cognom2="Ribas";
    var dia=2, mes=7, any=2020;
    console.log(cognom1+" "+cognom2+", "+nom);
    console.log(dia+"/"+mes+"/"+any);
}

function fase2()
{
    titol("fase2");
    //console.log("Introdueix el teu any de naixament (>"+ANY_REFERENCIA+"): "); // en aquest cas l'imput s'hauria de fer des del html.
    var inputText = "1993"; // provar diferents valors, i paraules
    try
    {
        var any = parseInt(inputText);
        if(any > ANY_REFERENCIA)
        {
            var anys_traspas = Math.trunc((any-ANY_REFERENCIA)/4);
            console.log("\nEntre "+ANY_REFERENCIA+" hi ha "+anys_traspas+" anys de traspàs.");
        }
        else{
            console.log("El número["+inputText+"] ha de ser més gran que "+ANY_REFERENCIA+".");
        }
    }
    catch (error)
    {
        console.log("El format del número["+inputText+"] no és correcte."); // no entenc perque si inputText = "hola", no entra al catch i llavors va al else...
        console.error(error);
    }
}

function fase3()
{
    titol("fase2");
    //console.log("Introdueix el teu any de naixament (>"+ANY_REFERENCIA+"): "); // en aquest cas l'imput s'hauria de fer des del html.
    var inputText = "1993"; // provar diferents valors, i paraules
    try
    {
        var any = parseInt(inputText);
        if(any > ANY_REFERENCIA)
        {
            var anys_traspas = Math.trunc((any-ANY_REFERENCIA)/4);
            var array1 = new Array(anys_traspas+1);
            array1[0] = ANY_REFERENCIA;
            console.log("Anys de traspàs:\n    "+array1[0]);
            for (var i = 1; i < array1.length; i++)
            {
                array1[i] = array1[i-1]+4;
                console.log("    "+array1[i]);
            }
            console.log("\nEntre "+ANY_REFERENCIA+" hi ha "+anys_traspas+" anys de traspàs.");

            var  es_traspas = false;
            console.log("El "+any+", el meu any de naixement, ");
            if (any == array1[anys_traspas])
            {
                es_traspas = true;
                console.log("és de traspas.");
            }
            else
            {
                console.log("NO és de traspas.");
            }
        }
        else{
            console.log("El número["+inputText+"] ha de ser més gran que "+ANY_REFERENCIA+".");
        }
    }
    catch (error)
    {
        console.log("El format del número["+inputText+"] no és correcte."); // no entenc perque si inputText = "hola", no entra al catch i llavors va al else...
        console.error(error);
    }
}