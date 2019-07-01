<template>
    <div class="idea">
        <h3 class="lead">{{ item.title }}</h3>  
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>