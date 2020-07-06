// JavaScript source code
var nom="Pau", cognom1="Lopez", cognom2="Ribas";
var dia=2, mes=7, any=2020;
console.log(cognom1+" "+cognom2+", "+nom);
console.log(dia+"/"+mes+"/"+any);




public const int ANY_REFERENCIA = 1948; //any de traspas de referència

static void Main(string[] args)
{
    hello_world();
    fase1();
    fase2();
    fase3();
}

private static void titol(string titol)
{
    console.log($"\n\n---\n{titol}:\n");
}

private static void hello_world()
{
    titol("hello world");
    console.log("Hello World!");
    console.log(DateTime.Now);
}

private static void fase1()
{
    titol("fase1");
    string nom = "Pau", cognom1 = "Lopez", cognom2 = "Ribas";
    int dia = 2, mes = 7, any = 2020;
    console.log($"{cognom1} {cognom2}, {nom}");
    console.log($"{dia}/{mes}/{any}");
}

private static void fase2()
{
    titol("fase2");
    console.log($"introdueix el teu any de naixament (>{ANY_REFERENCIA}): ");
    var inputText = console.ReadLine();
    try
    {
        var any = int.Parse(inputText);
        if(any > ANY_REFERENCIA)
        {
            int anys_traspas = (any-ANY_REFERENCIA)/4;
            console.log($"\nEntre {ANY_REFERENCIA} hi ha {anys_traspas} anys de traspàs.");
        }
        else{
            console.log($"El número[{inputText}] ha de ser més gran que {ANY_REFERENCIA}.");
        }
    }
    catch (System.Exception e1)
    {
        console.log($"El format del número[{inputText}] no és correcte.");
    }
}

private static void fase3()
{
    titol("fase2");
    console.log($"introdueix el teu any de naixament (>{ANY_REFERENCIA}): ");
    var inputText = console.ReadLine();
    try
    {
        var any = int.Parse(inputText);
        if(any > ANY_REFERENCIA)
        {
            int anys_traspas = (any-ANY_REFERENCIA)/4;
            int[] array1 = new int[anys_traspas+1];
            array1.SetValue(ANY_REFERENCIA,0);
            console.log($"Anys de traspàs: {array1[0]}");
            for (int i = 1; i < array1.Length; i++)
            {
                array1[i] = array1[i-1]+4;
                console.log($", {array1[i]}");
            }
            console.log($"\nEntre {ANY_REFERENCIA} hi ha {anys_traspas} anys de traspàs.");

            bool es_traspas = false;
            console.log($"El {any}, el meu any de naixement, ");
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
            console.log($"El número[{inputText}] ha de ser més gran que {ANY_REFERENCIA}.");
        }
    }
    catch (System.Exception e1)
    {
        console.log($"El format del número[{inputText}] no és correcte.");
    }
}