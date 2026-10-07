export const notes = [
  {
    title: 'Designing Maintainable REST APIs',
    tag: 'Backend',
    summary: 'A practical way to make HTTP APIs easier to understand, validate, test, and evolve.',
    sections: [
      {
        heading: 'Start with the resource and its contract',
        paragraphs: [
          'A useful API starts with the domain concepts clients need, not with a list of database tables or controller methods. Represent those concepts as resources with stable names, then choose HTTP methods according to their intent: GET reads, POST creates or invokes a non-idempotent operation, PUT replaces a resource, and PATCH applies a partial update. A consistent resource model gives consumers a predictable way to navigate the API.',
          'Before implementing an endpoint, write down its method, path, request shape, response shape, and failure cases. For example, a create-expense operation should make clear which fields are required, which values the server generates, and what clients receive after a successful save. That contract is the shared boundary between frontend, backend, tests, and documentation.',
        ],
      },
      {
        heading: 'Validate at the boundary',
        paragraphs: [
          'Treat every request as untrusted, even when it comes from an application you also control. Validate required fields, formats, numeric ranges, and cross-field rules before handing data to business logic. In a Spring application, request DTOs with Bean Validation annotations can make basic constraints visible beside the input shape. Service-level checks still matter for rules that depend on current state, such as whether an account exists or a transition is allowed.',
          'Return validation errors in a consistent structure. A client should be able to distinguish a malformed request from a missing resource or a conflict, and it should receive enough field-level information to correct its input. Avoid returning stack traces, SQL details, or implementation internals: those details are not a useful public contract and can expose sensitive information.',
        ],
      },
      {
        heading: 'Keep responsibilities separate',
        paragraphs: [
          'Controllers should translate HTTP into application calls and translate results back into HTTP. They should not become the home for business rules, persistence queries, or large transformations. A service layer can own use-case decisions, while repositories encapsulate storage operations. This separation is not ceremony for its own sake: it makes the behavior easier to test without starting a web server or database for every rule.',
          'Use explicit request and response DTOs rather than exposing persistence entities directly. The API then remains free to evolve its public fields without making every database change a breaking client change. Keep mapping code straightforward, and introduce additional abstractions only when they clarify a real boundary.',
        ],
      },
      {
        heading: 'Choose status codes and retries deliberately',
        paragraphs: [
          'HTTP status codes tell clients what happened and what they can do next. Use successful codes consistently, return 201 Created when a resource is created, 400 for invalid input, 404 when a requested resource does not exist, and 409 when the request conflicts with current state. A stable error body can carry a machine-readable code and a human-readable message without forcing clients to parse prose.',
          'Think about retries for operations that may be sent more than once because of timeouts or intermittent network failures. Reads are naturally safe to retry. For financial or other consequential writes, an idempotency key or a naturally idempotent operation can prevent duplicate effects. Document which operations can be retried and avoid implying that every POST is safe to repeat.',
        ],
      },
      {
        heading: 'Make collections usable and test the contract',
        paragraphs: [
          'Collection endpoints need a deliberate pagination and sorting policy. Bound page size, define stable ordering, and expose enough metadata for a client to request the next page. Filtering should be based on real use cases, with limits that keep a broad query from turning into an unbounded database scan. If an endpoint returns related data, avoid silently creating an N+1 query pattern as the collection grows.',
          'Test the behavior that callers rely on: required-field validation, authorization boundaries, successful create and read flows, not-found responses, conflicts, and error-body shape. Unit tests can cover business decisions quickly; HTTP-level tests can verify routing, serialization, validation, and status codes together. A concise OpenAPI description and examples complete the contract, but tests should remain the executable check that implementation and contract agree.',
        ],
      },
    ],
  },
  {
    title: 'Handling Class Imbalance in Fraud Detection',
    tag: 'Machine Learning',
    summary: 'Why accuracy can hide missed fraud, and how data splitting, metrics, and thresholds change the evaluation.',
    sections: [
      {
        heading: 'Why the majority class can mislead',
        paragraphs: [
          'Fraud datasets often contain many more legitimate transactions than fraudulent ones. A classifier that predicts “legitimate” for every row can therefore achieve impressive accuracy while detecting no fraud at all. Accuracy answers how often the model is correct overall; it does not say whether the rare class is being found. Start by inspecting class counts and the baseline performance of a trivial majority-class predictor.',
          'The objective is not simply to maximize a metric. A false negative can allow a fraudulent transaction through, while a false positive may block a legitimate customer or send a transaction for manual review. Those outcomes have different costs. The evaluation should make the trade-off visible so that a decision threshold can be selected for an intended workflow rather than inherited from a library default.',
        ],
      },
      {
        heading: 'Split first to prevent leakage',
        paragraphs: [
          'Create training, validation, and test splits before applying any resampling or data-dependent transformation. Resampling the full dataset before splitting can place synthetic or duplicated information on both sides of the boundary, making evaluation look better than it should. Fit scalers, encoders, feature selection, and resampling steps using training data only. Apply the fitted transformations to validation and test data without letting those sets influence training.',
          'For time-dependent transactions, a random split may also leak future patterns into the past. Consider a chronological split that trains on earlier events and evaluates on later ones. If repeated entities or near-duplicate records appear, choose a splitting strategy that prevents related examples from crossing partitions. The right split reflects how the model will encounter new data after deployment.',
        ],
      },
      {
        heading: 'Use metrics that reveal the operating point',
        paragraphs: [
          'Precision measures how many flagged transactions are truly fraudulent; recall measures how many fraudulent transactions are caught. The F1 score summarizes their balance at a chosen threshold, but it can obscure the underlying trade-off. A precision-recall curve shows the relationship across thresholds and is especially informative when the positive class is rare. PR-AUC summarizes that curve, while ROC-AUC measures ranking quality across false-positive rates and true-positive rates.',
          'Report a confusion matrix at the selected threshold as well as aggregate scores. It translates metrics into counts of true positives, false positives, true negatives, and false negatives. Include the test-set class balance and state which class is considered positive. A metric without the evaluation setup is difficult to interpret or reproduce.',
        ],
      },
      {
        heading: 'Treat balancing and thresholding as separate choices',
        paragraphs: [
          'Class weights and resampling methods such as random oversampling or SMOTE can help a learner pay more attention to the minority class. They are not guaranteed improvements: synthetic examples can amplify noise, and undersampling can discard useful legitimate examples. Compare approaches using the same untouched validation split and the same evaluation metrics. Keep all balancing confined to the training portion of each fold when performing cross-validation.',
          'Many classifiers produce scores or probabilities that are converted to labels using a threshold. Changing the threshold changes precision and recall without retraining the model. Choose it on validation data according to the real use case—for example, a review team’s capacity or an explicit cost of missed fraud—and freeze it before the final test evaluation. Selecting a threshold on the test set makes the reported result optimistic.',
        ],
      },
      {
        heading: 'Make the result reproducible and useful',
        paragraphs: [
          'Record the dataset version, split strategy, preprocessing steps, model parameters, random seeds, and threshold alongside the metrics. Save the evaluation script or notebook so another person can reproduce the same calculation. Compare against a simple baseline, and inspect errors by useful groups such as transaction type or time period, while checking that those slices contain enough examples to draw meaningful conclusions.',
          'A strong offline score is not the end of a fraud system. Transaction patterns change, labels may arrive late, and a deployed model can become miscalibrated. Monitor class prevalence, score distributions, review outcomes, and delayed labels where available. Define how the system behaves when data is missing or a scoring service is unavailable, and keep a human review path for uncertain cases. These operational details determine whether a model is useful, not just whether its training notebook looks promising.',
        ],
      },
    ],
  },
]
