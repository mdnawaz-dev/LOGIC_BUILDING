<!DOCTYPE html>
<html>
<body>
<script>
  let marks = prompt("Enter your marks:");
  marks = Number(marks);
  if (marks >= 90) {
    console.log("the grade is A");
  } else if (marks >= 75) {
    console.log("the grade is B");
  } else if (marks >= 60) {
    console.log("the grade is C");
  } else if (marks >= 50) {
    console.log("the grade is D");
  } else {
    console.log("Fail");
  }
</script>
</body>
</html>