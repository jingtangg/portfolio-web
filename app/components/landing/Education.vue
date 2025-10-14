<script setup lang="ts">
defineProps<{
  page: {
    education: {
      title: string
      items: Array<{
        degree: string
        school: string
        date: string
        location: string
      }>
    }
  }
}>()
</script>

<template>
  <UPageSection
    :title="page.education.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-4">
        <Motion
          v-for="(edu, index) in page.education.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex flex-col gap-1"
        >
          <div class="flex items-center text-nowrap gap-2">
            <p class="text-sm">
              {{ edu.date }}
            </p>
            <USeparator />
            <span class="text-sm font-medium">{{ edu.degree }}</span>
          </div>
          <div class="flex justify-end">
            <span class="text-sm">{{ edu.school }} • {{ edu.location }}</span>
          </div>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>