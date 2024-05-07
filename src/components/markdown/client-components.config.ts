import {
  CardDirective,
  InitialContactBanner,
} from '~/components/markdown/directives'
import {
  DisclaimerDirective,
  LaboralRightsGridDirective,
  MinimumWageMapDirective,
  QuizDirective,
  VacationDaysTableDirective,
} from '~/components/markdown/directives/page-specific'
import { htmlComponents } from '~/components/markdown/html-components.config'

export const clientComponents = {
  ...htmlComponents,
  'card': CardDirective,
  'contacto-inicial': InitialContactBanner,

  // page-specific
  'disclaimer': DisclaimerDirective,
  'laboral-rights-grid': LaboralRightsGridDirective,
  'minimum-wage-map': MinimumWageMapDirective,
  'quiz': QuizDirective,
  'vacation-days-table': VacationDaysTableDirective,
}
