<template>
<section>
<h2>My friends</h2>
<ul>
  <li>hey</li>
</ul>
</section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manual",
          name: "Manuel Lorenzo",
          phone: "01234 5678 991",
          email: " manuel@localhost.com",
        },
        {
          id: "juli",
          name: "Julie Jones",
          phone: "01234 888 991",
          email: " manuel123@localhost.com",
        },
      ],
    };
  },
};
</script>
