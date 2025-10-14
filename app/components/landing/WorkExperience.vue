<script setup lang="ts">
defineProps<{
  page: {
    experience: {
      title: string
      items: Array<{
        position: string
        date: string
        company: {
          name: string
          logo: string
          url: string
          color: string
        }
        contributions?: string[]
        achievements?: string[]
      }>
    }
  }
}>()
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-3">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex flex-col gap-3"
        >
          <div class="flex items-center text-nowrap gap-2">
            <p class="text-sm">
              {{ experience.date }}
            </p>
            <USeparator />
            <ULink
              class="flex items-center gap-1"
              :to="experience.company.url"
              target="_blank"
            >
              <span class="text-sm">
                {{ experience.position }}
              </span>
              <div
                class="inline-flex items-center gap-1"
                :style="{ color: experience.company.color }"
              >
                <span class="font-medium">{{ experience.company.name }}</span>
                <UIcon :name="experience.company.logo" />
              </div>
            </ULink>
          </div>

          <!-- <div v-if="experience.contributions" class="flex flex-col gap-2 text-left">
            <h4 class="text-sm font-semibold text-foreground">Key Contributions</h4>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(contribution, idx) in experience.contributions" :key="idx" class="text-sm text-muted text-left">
                {{ contribution }}
              </li>
            </ul>
          </div>

          <div v-if="experience.achievements" class="flex flex-col gap-2 text-left">
            <h4 class="text-sm font-semibold text-foreground">Key Achievements</h4>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(achievement, idx) in experience.achievements" :key="idx" class="text-sm text-muted text-left">
                {{ achievement }}
              </li>
            </ul>
          </div> -->
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
