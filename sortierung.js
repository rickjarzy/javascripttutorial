
					function sortierung(){

                        var inpurt_array = ["kjh", "akjwsfh", "halt", "ajhskjfhaskjhfkjahfkjh", "98763kmsnmdg"];					
                        var ergebnis = document.getElementById("ergebnis-bereich");
						var return_string = "";

						for (var i = 0; i < inpurt_array.length; i++)
						{	
							return_string += inpurt_array[i] + "; ";

						}

                        ergebnis.innerHTML = return_string;
                        console.log("ergenisstring: ", return_string);
						return 0;
					}