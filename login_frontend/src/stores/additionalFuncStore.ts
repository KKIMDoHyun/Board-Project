import {observable} from 'mobx';
import {AdditionalFuncStoreType} from './types/additionalFuncStore.type';

const AdditionalFuncStore: AdditionalFuncStoreType = observable({
  errMessage: '',
  setErrMessage(message: string) {
    this.errMessage = message;
  },
});

export default AdditionalFuncStore;
