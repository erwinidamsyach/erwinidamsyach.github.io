<template>
  <svg
          class="absolute inset-0 -z-10 h-full w-full max-w-3xl stroke-primary-500 dark:stroke-gray-500 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width="80"
              height="80"
              x="-30%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 80V.5H80" fill="none" />
              <animateTransform
                attributeName="patternTransform"
                type="translate"
                from="0 0"
                to="80 80"
                dur="2s"
                repeatCount="indefinite"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
</template>

<style scoped>
@keyframes grid-flow {
  0% { transform: translateX(0); }
  100% { transform: translateX(-40px); }
}

.animate-grid-flow {
  animation: grid-flow 20s linear infinite;
}
</style>
