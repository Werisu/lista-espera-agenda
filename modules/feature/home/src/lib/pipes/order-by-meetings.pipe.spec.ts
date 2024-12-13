import { Amigo, mockFriends } from '@lista-espera-agenda/friend-data-access';
import { OrderByMeetingsPipe } from './order-by-meetings.pipe';

describe('OrderByMeetingsPipe', () => {
  let pipe: OrderByMeetingsPipe;

  beforeEach(() => {
    pipe = new OrderByMeetingsPipe();
  });

  it('create an instance', () => {
    const pipe = new OrderByMeetingsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return an empty array if input is empty', () => {
    const result = pipe.transform([]);
    expect(result).toEqual([]);
  });

  it('should sort the items in descending order by number of encounters', () => {
    const friends = mockFriends;
    const result = pipe.transform(friends);
    expect(result[0].encounters.length).toBe(3);
    expect(result[1].encounters.length).toBe(3);
    expect(result[2].encounters.length).toBe(3);
  });

  it('should handle items with no encounters', () => {
    const friends = mockFriends;
    const result = pipe.transform(friends);
    expect(result).toEqual(friends);
  });

  it('should return the same array if input is undefined', () => {
    const result = pipe.transform(undefined as unknown as Amigo[]);
    expect(result).toBeUndefined();
  });
});
