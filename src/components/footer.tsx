import { Author, Homepage } from "@shared/consts"

export function Footer() {
  return (
    <>
      <a href={`${Homepage}/LICENCE`} target="_blank">MIT LICENCE</a>
      <span>
        <span>TodayNews © 2024 By </span>
        <a href={Author.url} target="_blank">
          {Author.name}
        </a>
      </span>
    </>
  )
}
