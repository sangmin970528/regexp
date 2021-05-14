let str=`
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quck brown fox jumps over the lazy dog.
abbcccdddd
http://localhos::1234
`
console.log(
    str.match(/(?<=@).{1,}/g)
)