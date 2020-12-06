<script context="module">
  // import the logic for finding a post based on permalink
  import {findPost} from '../../markdown'

  // sapper calls this to load our data
  export function preload(url) {
    // find the post based on the permalink param
    const post = findPost(url.params.markdown)
    
    // return a list of props
    return { post }
  }
</script>

<script>
  // this prop is filled from the result of the `preload()`
  export let post
</script>

<!-- display the post -->
<h1>{post.title}</h1>
<h3>{post.global.name}</h3>

{@html post.html}