/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const logData = (data: any, message?: string) => {
  let log = data?.data || data;
  let password;
  if (log && typeof log === 'object') {
    password = 'password' in log ? { password: '*****' } : undefined;
    log = data.data ? { ...data, data: { ...log, ...password } } : { ...log, ...password };
  } else if (typeof data === 'object') {
    log = { ...data };
  }
  console.log(`\n${message || ''}`, log);
};

export const delay = (time: number) =>
  new Promise((rv) => {
    setTimeout(rv, time);
  });
