type NameParts = 'name' | 'surname' | 'full';
type NameType = 'preferred' | 'legal'

const FIRST_NAME = 'Nikita';
const LAST_NAME = 'Yakunin';
const LEGAL_LAST_NAME = 'Iakunin';
const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`;
const LEGAL_FULL_NAME = `${FIRST_NAME} ${LEGAL_LAST_NAME}`;

export const personalInfo = {
  getName: (parts: NameParts, type: NameType = 'preferred') => {
    switch (parts) {
      case 'name': {
        return FIRST_NAME;
      }
      case 'surname': {
        if (type === 'legal') {
          return LEGAL_LAST_NAME;
        }

        return LAST_NAME;
      }
      case 'full': {
        if (type === 'legal') {
          return LEGAL_FULL_NAME;
        }

        return FULL_NAME;
      }
    }
  },
  address: {
    addressLine1: 'Stendaler Str. 20',
    postIndex: '10559',
    city: 'Berlin',
    state: 'Berlin',
    country: 'Germany',
  },
  contacts: {
    email: 'nayakunin99@gmail.com',
    phone: '+4915753553799',
    tg: 'nayakunin',
    linkedinLink: 'https://www.linkedin.com/in/nikita-yakunin-30511b1b5/',
  },
}
