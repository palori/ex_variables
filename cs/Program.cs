using System;

namespace cs
{
    class Program
    {
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
            Console.WriteLine($"\n\n---\n{titol}:\n");
        }

        private static void hello_world()
        {
            titol("hello world");
            Console.WriteLine("Hello World!");
            Console.WriteLine(DateTime.Now);
        }

        private static void fase1()
        {
            titol("fase1");
            string nom = "Pau", cognom1 = "Lopez", cognom2 = "Ribas";
            int dia = 2, mes = 7, any = 2020;
            Console.WriteLine($"{cognom1} {cognom2}, {nom}");
            Console.WriteLine($"{dia}/{mes}/{any}");
        }

        private static void fase2()
        {
            titol("fase2");
            Console.Write($"Introdueix el teu any de naixament (>{ANY_REFERENCIA}): ");
            var inputText = Console.ReadLine();
            try
            {
                var any = int.Parse(inputText);
                if(any > ANY_REFERENCIA)
                {
                    int anys_traspas = (any-ANY_REFERENCIA)/4;
                    Console.WriteLine($"\nEntre {ANY_REFERENCIA} hi ha {anys_traspas} anys de traspàs.");
                }
                else{
                    Console.WriteLine($"El número[{inputText}] ha de ser més gran que {ANY_REFERENCIA}.");
                }
            }
            catch (System.Exception e1)
            {
                Console.WriteLine($"El format del número[{inputText}] no és correcte.");
            }
        }

        private static void fase3()
        {
            titol("fase3");
            Console.Write($"Introdueix el teu any de naixament (>{ANY_REFERENCIA}): ");
            var inputText = Console.ReadLine();
            try
            {
                var any = int.Parse(inputText);
                if(any > ANY_REFERENCIA)
                {
                    int anys_traspas = (any-ANY_REFERENCIA)/4;
                    int[] array1 = new int[anys_traspas+1];
                    array1.SetValue(ANY_REFERENCIA,0);
                    Console.Write($"Anys de traspàs: {array1[0]}");
                    for (int i = 1; i < array1.Length; i++)
                    {
                        array1[i] = array1[i-1]+4;
                        Console.Write($", {array1[i]}");
                    }
                    Console.WriteLine($"\nEntre {ANY_REFERENCIA} hi ha {anys_traspas} anys de traspàs.");

                    bool es_traspas = false;
                    Console.Write($"El {any}, el meu any de naixement, ");
                    if (any == array1[anys_traspas])
                    {
                        es_traspas = true;
                        Console.WriteLine("és de traspas.");
                    }
                    else
                    {
                        Console.WriteLine("NO és de traspas.");
                    }
                }
                else{
                    Console.WriteLine($"El número[{inputText}] ha de ser més gran que {ANY_REFERENCIA}.");
                }
            }
            catch (System.Exception e1)
            {
                Console.WriteLine($"El format del número[{inputText}] no és correcte.");
            }
        }
    }
}
