import pino from 'pino'
import pretty from 'pino-pretty'
import moment from 'moment'

export const logger = pino(
  {
    base: {
      pid: false,
      hostname: false
    },
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        ignore: 'pid,hostname'
      }
    },
    timestamp: () => `,"time":"${moment().format('YYYY-MM-DD HH:MM:ss')}"`
  },
  pretty()
)
