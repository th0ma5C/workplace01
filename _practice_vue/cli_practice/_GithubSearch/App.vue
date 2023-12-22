<template>
    <div>
        <HubSearch></HubSearch>
        <HubList></HubList>
    </div>
</template>

<script>
import HubList from './components/HubList';
import HubSearch from './components/HubSearch';

export default {
    name: 'App',
    components: { HubList, HubSearch },
}
</script>

<style scoped></style>