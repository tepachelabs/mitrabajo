import { CardDirective } from '~/components/markdown/directives'
import {
  LaboralRightsGridDirective,
  QuizDirective,
  VacationDaysTableDirective,
} from '~/components/markdown/directives/page-specific'
import { htmlComponents } from '~/components/markdown/html-components.config'

export const clientComponents = {
  ...htmlComponents,
  'card': CardDirective,

  // page-specific
  'laboral-rights-grid': LaboralRightsGridDirective,
  'quiz': QuizDirective,
  'vacation-days-table': VacationDaysTableDirective,
}
