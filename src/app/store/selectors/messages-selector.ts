export function messagesSelector(state) {
  return state.messages.map(formatMessage);
}

function formatMessage(rawMessage: any) {
  const representation = rawMessage.attributes.representations.slice(-1)[0];

  return {
    id: rawMessage.id,
    type: representation.name,
    date: rawMessage.attributes.dates.created,
    ...representation.context
  };
}
