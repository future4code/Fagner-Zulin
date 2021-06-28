export class HashGeneratorMock {
   public hash = async (s: string): Promise<any> => {
      return s
   }

   public compareHash = async (s: string, hash: string): Promise<boolean> => {
      return s === hash
   }
}

export default new HashGeneratorMock()
