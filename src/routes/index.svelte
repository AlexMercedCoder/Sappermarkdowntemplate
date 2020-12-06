<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<script>
  // import the list of posts
  import {posts} from '../markdown'
</script>


<h1>My Weblog</h1>

<!-- iterate through each post -->
{#each posts as post}
  <article>
    <!-- link article to /posts/$permalink -->   
    <a href={`/mark/${post.permalink}`}>
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
    </a>
  </article>
{/each}
