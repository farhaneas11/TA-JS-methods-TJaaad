let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((perso) => perso.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((perso) => perso.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((perso) => perso.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filtername = peopleName.filter((perso) => {
  if(perso.startsWith("J")||
  perso.startsWith("P")
  )
  {
    return true;
  }else
  {
    return false;
  }
}) 
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filternamelength = peopleName.filter((perso) => {
  if(perso.startsWith("A")||
  perso.startsWith("C")
  )
  {
    return true;
  }else
  {
    return false;
  }
}) 

console.log(filternamelength.length);
// Log all the filtered male ('M') in persons array
let filtersexM = peopleSex.filter((perso) => {
if(perso.includes("M"))
{
  return true;
}else {
  return false;
}
})
// Log all the filtered female ('F') in persons array
let filtersexF = peopleSex.filter((perso) => {
  if(perso.includes("F"))
  {
    return true;
  }else {
    return false;
  }
  })
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let nameF = persons.filter((perso) => {
  if(perso.sex ==="F" ){
    if(perso.name.startsWith("J") || perso.name.startsWith("C")){
      return true;
    }else {
      return false;
    }
  }
})
// Log all the even numbers from peopleGrade array
let evenlog = peopleGrade.filter((perso) => perso % 2 === 0);
// Find the first name that starts with 'J' in persons array and log the object

// Find the first name that starts with 'P' in persons array and log the object

// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((perso) => perso.sex == "F" )
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((perso) => perso.sex == "M" )
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc,cv)=>{
  return acc + cv ; 
},0)
// Find the average grade
let avgGrade = gradeTotal / peopleGrade.length;
// Find the average grade of male
let filterGradeM = filtersexM.filter((perso) => perso.grade);
let gradeTotalM = filterGradeM.reduce((acc,cv)=>{
  return acc + cv ; 
},0)
let avgGradeM = gradeTotalM / filterGradeM.length;
// Find the average grade of female
let filterGradeF = filtersexF.filter((perso) => perso.grade);
let gradeTotalF = filterGradeF.reduce((acc,cv)=>{
  return acc + cv ; 
},0)
let avgGradeF = gradeTotalF / filterGradeF.length;
// Find the highest grade
let gradesort = [...peopleGrade].sort((a,b) => a - b).pop();
// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort();//yes i did.
// Sort the peopleGrade in descending order
let gradesortdes = [...peopleGrade].sort((a,b) => a - b);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`
let sortName = [...peopleName].sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let sortname = [...peopleName].sort();