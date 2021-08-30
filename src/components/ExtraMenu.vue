<template>
    <div class="wrapper">
        <a :href="extra_item.link"
                class="extra_menu_lik"
                v-for="(extra_item, index) in extra_menu"
                :key="index">
            {{ extra_item.anchor }}
        </a>
    </div>
</template>


<script>

export default {
    props:["extra_menu"]
}
</script>
